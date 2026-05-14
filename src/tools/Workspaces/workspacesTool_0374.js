/**
 * Generated Tool: workspacesTool_0374
 * Domain: Workspaces
 * ID: 0374
 */
exports.workspacesTool_0374 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0374:', error);
    throw error;
  }
};
