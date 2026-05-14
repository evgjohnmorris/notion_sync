/**
 * Generated Tool: blocksTool_0374
 * Domain: Blocks
 * ID: 0374
 */
exports.blocksTool_0374 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0374:', error);
    throw error;
  }
};
