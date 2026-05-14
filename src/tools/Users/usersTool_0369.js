/**
 * Generated Tool: usersTool_0369
 * Domain: Users
 * ID: 0369
 */
exports.usersTool_0369 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0369:', error);
    throw error;
  }
};
