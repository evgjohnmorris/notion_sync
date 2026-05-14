/**
 * Generated Tool: blocksTool_0326
 * Domain: Blocks
 * ID: 0326
 */
exports.blocksTool_0326 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0326:', error);
    throw error;
  }
};
