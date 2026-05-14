/**
 * Generated Tool: usersTool_0463
 * Domain: Users
 * ID: 0463
 */
exports.usersTool_0463 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0463:', error);
    throw error;
  }
};
