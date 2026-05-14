/**
 * Generated Tool: usersTool_0229
 * Domain: Users
 * ID: 0229
 */
exports.usersTool_0229 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0229:', error);
    throw error;
  }
};
