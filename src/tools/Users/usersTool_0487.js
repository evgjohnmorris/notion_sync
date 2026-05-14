/**
 * Generated Tool: usersTool_0487
 * Domain: Users
 * ID: 0487
 */
exports.usersTool_0487 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0487:', error);
    throw error;
  }
};
