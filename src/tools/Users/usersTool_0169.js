/**
 * Generated Tool: usersTool_0169
 * Domain: Users
 * ID: 0169
 */
exports.usersTool_0169 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0169:', error);
    throw error;
  }
};
