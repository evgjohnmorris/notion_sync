/**
 * Generated Tool: usersTool_0554
 * Domain: Users
 * ID: 0554
 */
exports.usersTool_0554 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0554:', error);
    throw error;
  }
};
