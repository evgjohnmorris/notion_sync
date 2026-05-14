/**
 * Generated Tool: usersTool_0175
 * Domain: Users
 * ID: 0175
 */
exports.usersTool_0175 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0175:', error);
    throw error;
  }
};
