/**
 * Generated Tool: usersTool_0531
 * Domain: Users
 * ID: 0531
 */
exports.usersTool_0531 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0531:', error);
    throw error;
  }
};
