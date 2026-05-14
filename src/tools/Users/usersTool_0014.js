/**
 * Generated Tool: usersTool_0014
 * Domain: Users
 * ID: 0014
 */
exports.usersTool_0014 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0014:', error);
    throw error;
  }
};
