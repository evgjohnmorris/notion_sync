/**
 * Generated Tool: usersTool_0777
 * Domain: Users
 * ID: 0777
 */
exports.usersTool_0777 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0777:', error);
    throw error;
  }
};
