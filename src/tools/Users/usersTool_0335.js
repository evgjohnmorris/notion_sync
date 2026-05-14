/**
 * Generated Tool: usersTool_0335
 * Domain: Users
 * ID: 0335
 */
exports.usersTool_0335 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0335:', error);
    throw error;
  }
};
