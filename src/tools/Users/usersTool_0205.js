/**
 * Generated Tool: usersTool_0205
 * Domain: Users
 * ID: 0205
 */
exports.usersTool_0205 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0205:', error);
    throw error;
  }
};
