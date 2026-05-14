/**
 * Generated Tool: usersTool_0515
 * Domain: Users
 * ID: 0515
 */
exports.usersTool_0515 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0515:', error);
    throw error;
  }
};
