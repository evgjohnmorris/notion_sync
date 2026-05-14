/**
 * Generated Tool: blocksTool_0766
 * Domain: Blocks
 * ID: 0766
 */
exports.blocksTool_0766 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0766:', error);
    throw error;
  }
};
