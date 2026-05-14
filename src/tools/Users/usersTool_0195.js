/**
 * Generated Tool: usersTool_0195
 * Domain: Users
 * ID: 0195
 */
exports.usersTool_0195 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0195:', error);
    throw error;
  }
};
