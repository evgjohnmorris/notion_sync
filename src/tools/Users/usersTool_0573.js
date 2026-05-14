/**
 * Generated Tool: usersTool_0573
 * Domain: Users
 * ID: 0573
 */
exports.usersTool_0573 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0573:', error);
    throw error;
  }
};
