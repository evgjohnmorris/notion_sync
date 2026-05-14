/**
 * Generated Tool: usersTool_0953
 * Domain: Users
 * ID: 0953
 */
exports.usersTool_0953 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0953:', error);
    throw error;
  }
};
