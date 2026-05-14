/**
 * Generated Tool: workspacesTool_0508
 * Domain: Workspaces
 * ID: 0508
 */
exports.workspacesTool_0508 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0508:', error);
    throw error;
  }
};
