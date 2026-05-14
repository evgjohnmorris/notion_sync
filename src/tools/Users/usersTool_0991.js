/**
 * Generated Tool: usersTool_0991
 * Domain: Users
 * ID: 0991
 */
exports.usersTool_0991 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0991:', error);
    throw error;
  }
};
