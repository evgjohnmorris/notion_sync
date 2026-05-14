/**
 * Generated Tool: usersTool_0747
 * Domain: Users
 * ID: 0747
 */
exports.usersTool_0747 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0747:', error);
    throw error;
  }
};
