/**
 * Generated Tool: usersTool_0371
 * Domain: Users
 * ID: 0371
 */
exports.usersTool_0371 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0371:', error);
    throw error;
  }
};
