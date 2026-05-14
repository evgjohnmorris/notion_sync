/**
 * Generated Tool: workspacesTool_0588
 * Domain: Workspaces
 * ID: 0588
 */
exports.workspacesTool_0588 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0588:', error);
    throw error;
  }
};
