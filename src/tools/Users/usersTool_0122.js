/**
 * Generated Tool: usersTool_0122
 * Domain: Users
 * ID: 0122
 */
exports.usersTool_0122 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0122:', error);
    throw error;
  }
};
