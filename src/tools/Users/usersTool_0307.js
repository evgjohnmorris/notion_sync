/**
 * Generated Tool: usersTool_0307
 * Domain: Users
 * ID: 0307
 */
exports.usersTool_0307 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0307:', error);
    throw error;
  }
};
