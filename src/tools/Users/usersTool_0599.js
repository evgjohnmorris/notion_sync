/**
 * Generated Tool: usersTool_0599
 * Domain: Users
 * ID: 0599
 */
exports.usersTool_0599 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0599:', error);
    throw error;
  }
};
