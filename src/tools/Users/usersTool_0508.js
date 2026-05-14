/**
 * Generated Tool: usersTool_0508
 * Domain: Users
 * ID: 0508
 */
exports.usersTool_0508 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0508:', error);
    throw error;
  }
};
