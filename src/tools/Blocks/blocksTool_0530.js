/**
 * Generated Tool: blocksTool_0530
 * Domain: Blocks
 * ID: 0530
 */
exports.blocksTool_0530 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0530:', error);
    throw error;
  }
};
