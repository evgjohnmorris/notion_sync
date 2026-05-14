/**
 * Generated Tool: usersTool_0544
 * Domain: Users
 * ID: 0544
 */
exports.usersTool_0544 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0544:', error);
    throw error;
  }
};
