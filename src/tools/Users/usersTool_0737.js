/**
 * Generated Tool: usersTool_0737
 * Domain: Users
 * ID: 0737
 */
exports.usersTool_0737 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0737:', error);
    throw error;
  }
};
