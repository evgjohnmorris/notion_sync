/**
 * Generated Tool: workspacesTool_0363
 * Domain: Workspaces
 * ID: 0363
 */
exports.workspacesTool_0363 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0363:', error);
    throw error;
  }
};
