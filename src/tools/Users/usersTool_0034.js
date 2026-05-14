/**
 * Generated Tool: usersTool_0034
 * Domain: Users
 * ID: 0034
 */
exports.usersTool_0034 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0034:', error);
    throw error;
  }
};
