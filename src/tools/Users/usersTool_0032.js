/**
 * Generated Tool: usersTool_0032
 * Domain: Users
 * ID: 0032
 */
exports.usersTool_0032 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0032:', error);
    throw error;
  }
};
