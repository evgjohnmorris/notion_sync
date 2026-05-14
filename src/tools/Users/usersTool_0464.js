/**
 * Generated Tool: usersTool_0464
 * Domain: Users
 * ID: 0464
 */
exports.usersTool_0464 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0464:', error);
    throw error;
  }
};
