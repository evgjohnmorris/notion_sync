/**
 * Generated Tool: usersTool_0504
 * Domain: Users
 * ID: 0504
 */
exports.usersTool_0504 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0504:', error);
    throw error;
  }
};
