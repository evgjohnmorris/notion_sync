/**
 * Generated Tool: usersTool_0396
 * Domain: Users
 * ID: 0396
 */
exports.usersTool_0396 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0396:', error);
    throw error;
  }
};
