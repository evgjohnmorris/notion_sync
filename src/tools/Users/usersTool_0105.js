/**
 * Generated Tool: usersTool_0105
 * Domain: Users
 * ID: 0105
 */
exports.usersTool_0105 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0105:', error);
    throw error;
  }
};
