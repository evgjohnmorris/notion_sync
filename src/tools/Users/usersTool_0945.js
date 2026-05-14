/**
 * Generated Tool: usersTool_0945
 * Domain: Users
 * ID: 0945
 */
exports.usersTool_0945 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0945:', error);
    throw error;
  }
};
