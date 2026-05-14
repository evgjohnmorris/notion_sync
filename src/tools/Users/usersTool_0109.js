/**
 * Generated Tool: usersTool_0109
 * Domain: Users
 * ID: 0109
 */
exports.usersTool_0109 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0109:', error);
    throw error;
  }
};
