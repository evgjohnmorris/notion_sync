/**
 * Generated Tool: usersTool_0955
 * Domain: Users
 * ID: 0955
 */
exports.usersTool_0955 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0955:', error);
    throw error;
  }
};
