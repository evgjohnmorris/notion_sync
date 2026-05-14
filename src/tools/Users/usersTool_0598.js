/**
 * Generated Tool: usersTool_0598
 * Domain: Users
 * ID: 0598
 */
exports.usersTool_0598 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0598:', error);
    throw error;
  }
};
