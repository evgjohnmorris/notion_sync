/**
 * Generated Tool: usersTool_0904
 * Domain: Users
 * ID: 0904
 */
exports.usersTool_0904 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0904:', error);
    throw error;
  }
};
