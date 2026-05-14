/**
 * Generated Tool: workspacesTool_0142
 * Domain: Workspaces
 * ID: 0142
 */
exports.workspacesTool_0142 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0142:', error);
    throw error;
  }
};
