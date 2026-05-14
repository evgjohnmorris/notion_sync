/**
 * Generated Tool: usersTool_0067
 * Domain: Users
 * ID: 0067
 */
exports.usersTool_0067 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0067:', error);
    throw error;
  }
};
