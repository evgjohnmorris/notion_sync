/**
 * Generated Tool: usersTool_0392
 * Domain: Users
 * ID: 0392
 */
exports.usersTool_0392 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0392:', error);
    throw error;
  }
};
