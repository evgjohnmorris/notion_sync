/**
 * Generated Tool: usersTool_0556
 * Domain: Users
 * ID: 0556
 */
exports.usersTool_0556 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0556:', error);
    throw error;
  }
};
