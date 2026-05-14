/**
 * Generated Tool: usersTool_0418
 * Domain: Users
 * ID: 0418
 */
exports.usersTool_0418 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0418:', error);
    throw error;
  }
};
