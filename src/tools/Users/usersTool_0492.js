/**
 * Generated Tool: usersTool_0492
 * Domain: Users
 * ID: 0492
 */
exports.usersTool_0492 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0492:', error);
    throw error;
  }
};
