/**
 * Generated Tool: usersTool_0621
 * Domain: Users
 * ID: 0621
 */
exports.usersTool_0621 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0621:', error);
    throw error;
  }
};
