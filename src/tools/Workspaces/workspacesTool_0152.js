/**
 * Generated Tool: workspacesTool_0152
 * Domain: Workspaces
 * ID: 0152
 */
exports.workspacesTool_0152 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0152:', error);
    throw error;
  }
};
