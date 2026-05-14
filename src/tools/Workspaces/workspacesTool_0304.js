/**
 * Generated Tool: workspacesTool_0304
 * Domain: Workspaces
 * ID: 0304
 */
exports.workspacesTool_0304 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0304:', error);
    throw error;
  }
};
